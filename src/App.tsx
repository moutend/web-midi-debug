import React, {useState, useEffect} from 'react';

import Container from '@material-ui/core/Container';
import Console from './component/Console';

import MIDIManager from './logic/MIDIManager';

export default function App() {
  const [history, setHistory] = useState([] as string[]) as [string[], (v: string[]) => void];
  const [isMIDIManagerInitialized, setIsMIDIManagerInitialized] = useState(false);

  useEffect(() => {
    let midiManager = new MIDIManager(setHistory);

    window.document.addEventListener("keydown", (event: any) => {
      const c1 = event.altKey && event.key === "k";
      const c2 = event.ctrlKey && event.key === "k";

      if (!(c1 || c2)) {
        return
      }

      midiManager.clearHistory();
    }, false);

    setIsMIDIManagerInitialized(true);
  }, [isMIDIManagerInitialized]);

  return (
    <div>
      <Container maxWidth="sm">
        <h1>Web MIDI Debug</h1>
        <p>Press <code>Ctrl-K</code> or <code>Alt-K</code> to clear outputs.</p>
        <Console history={history}/>
        <p style={{textAlign: "center"}}><a href="https://github.com/moutend/web-midi-debug">View on GitHub</a></p>
      </Container>
    </div>
  );
}
