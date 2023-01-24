import { toAudioBuffer } from "mosfez-faust/convert";
import { playBuffer } from "mosfez-faust/play";
import { faust } from "mosfez-synth/faust";
import { poly } from "mosfez-synth/poly";
import { offlineRender } from "mosfez-synth/offline-render";
import { touchStart } from "mosfez-synth/touch-start";
import { InputEvent, isInputStopEvent } from "mosfez-synth/synth";

//
// create audio context and start it on first user iteraction
//

export const liveAudioContext = new window.AudioContext();
touchStart(liveAudioContext);

//
// define parameters for synth control
//

export type Params = {
  gate: number;
  voice: string;
  pitch: number;
  force: number;
  volume: number;
  speed: number;
  pan: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
};

export const initialParams = {
  pitch: 70,
  envelopeAttack: 0.002,
  envelopeDecay: 0.1,
  envelopeSustain: 0.3,
  envelopeRelease: 2,
  pan: 0.5,
};

//
// create synth dsp definition
//

function buildSynthDsp() {
  // create custom oscillator dsp
  const triangle = faust(
    "process = os.triangle(params.pitch : si.polySmooth(params.gate, 0.999, 1) : ba.midikey2hz) : *(params.volume);",
    {
      pitch: "pitch",
      gate: "gate",
      volume: 0.3,
    }
  );

  // create envelope
  const enveloped = faust(
    `
  a = params.envelopeAttack;
  d = params.envelopeDecay;
  s = params.envelopeSustain;
  r = params.envelopeRelease;
  process = *(en.adsr(a,d,s,r,params.gate));
  `,
    {
      inputs: [triangle],
      gate: "gate",
      force: "force",
      envelopeAttack: "envelopeAttack",
      envelopeDecay: "envelopeDecay",
      envelopeSustain: "envelopeSustain",
      envelopeRelease: "envelopeRelease",
    }
  );

  const tremolo = faust("process = *(os.osc(params.speed) * 0.4 + 0.5);", {
    inputs: [enveloped],
    speed: "speed",
  });

  const panned = faust("process = sp.panner(params.pan);", {
    inputs: [tremolo],
    pan: "pan",
  });

  const polyphonic = poly({
    input: panned,
    polyphony: 4,
    gate: "gate",
    release: "envelopeRelease",
  });

  return polyphonic;
}

const synthDsp = buildSynthDsp();

export async function play() {
  console.log("rendering");
  const events: InputEvent[] = [
    {
      type: "set",
      time: 0.595,
      params: {
        voice: "-2,2",
        gate: 1,
        force: 1,
        pitch: 60,
        pan: 0.3664352229389347,
        speed: 9.799338737192862,
      },
    },
    { type: "set", time: 0.657, params: { voice: "-2,2", gate: 0, force: 0 } },
    {
      type: "set",
      time: 0.857,
      params: {
        voice: "-1,2",
        gate: 1,
        force: 1,
        pitch: 61,
        pan: 0.37903270702987524,
        speed: 1.5853899460626244,
      },
    },
    {
      type: "set",
      time: 0.864,
      params: { voice: "-1,2", force: 1, pitch: 61 },
    },
    { type: "set", time: 0.912, params: { voice: "-1,2", gate: 0, force: 0 } },
    {
      type: "set",
      time: 1.145,
      params: {
        voice: "-1,1",
        gate: 1,
        force: 1,
        pitch: 66,
        pan: 0.2747280151288386,
        speed: 7.69904668429024,
      },
    },
    { type: "set", time: 1.17, params: { voice: "-1,1", force: 1, pitch: 66 } },
    { type: "set", time: 1.217, params: { voice: "-1,1", gate: 0, force: 0 } },
    {
      type: "set",
      time: 1.443,
      params: {
        voice: "1,1",
        gate: 1,
        force: 1,
        pitch: 68,
        pan: 0.6213349760002562,
        speed: 1.8454334771870697,
      },
    },
    { type: "set", time: 1.457, params: { voice: "1,1", force: 1, pitch: 68 } },
    { type: "set", time: 1.514, params: { voice: "1,1", gate: 0, force: 0 } },
    { type: "stop", time: 5 },
  ];

  const stopEvent = events.find(isInputStopEvent);
  if (!stopEvent) {
    console.log("no stop event found");
    return;
  }

  const { sampleRate } = liveAudioContext;

  const result = await offlineRender({
    channels: 1,
    sampleRate,
    length: stopEvent.time * sampleRate,
    initialParams,
    dspNode: synthDsp,
    events,
  });

  const buffer = await toAudioBuffer(result, liveAudioContext);

  console.log("playing");
  playBuffer(buffer, liveAudioContext);
}
