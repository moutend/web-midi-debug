export default class MIDIManager {
  events: string[] = [];
  devices: {[key: string]: any} = {};
  setHistory: (v: string[]) => void;

  clearHistory() {
    this.events = [];
    this.setHistory(this.events);
  }
  onEvent(event: any) {
    this.events.push(event.data.join("\t"));

    this.setHistory(this.events);
  }
  onError(message: any) {
    this.setHistory([
      "Failed to setup MIDI devices.",
      "Are you using the browser which supports Web MIDI API?",
      "The latest Google Chrome is a recommended browser.",
    ]);
  }
  onSuccess(data: WebMidi.MIDIAccess) {
    const iterator = data.inputs.values();

    for (let input = iterator.next(); !input.done; input = iterator.next()) {
    this.events.push(`${input.value.name} ... connected`);
    this.setHistory(this.events);

      this.devices[input.value.name!] = input.value;
      input.value.addEventListener("midimessage", this.onEvent.bind(this), false);
    }
    if (Object.keys(this.devices).length === 0) {
      this.events.push("No MIDI devices");
      this.setHistory(this.events);
    } else {
      this.events.push("");
      this.events.push("Event\tVal. 1\tVal. 2")
    }
  }
  constructor(setHistory: (v: string[]) => void) {
    this.setHistory = setHistory;

    if (window.navigator.requestMIDIAccess) {
      window.navigator
      .requestMIDIAccess()
      .then(this.onSuccess.bind(this), this.onError.bind(this));
    } else {
      this.onError("failed to access MIDI devices");
    }
  }
}
