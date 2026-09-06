import React, { useState, useRef } from 'react';
import { Game } from './logic/cc-logic.js';

import './styles/index.scss';

import PageTemplate from '../../layout/PageTemplate';
import Block from '../../layout/Block';
import PageFooter from '../../layout/PageFooter';

import { IMAGE_WIDTHS_BACKGROUND } from '../../config/imageWidths.js';
import Picture from '../../components/Picture';

export default function ControlledChaos() {

  const [activeChoice, setActiveChoice] = useState(null);
  const [round, setRound] = useState(0);
  const [state, setState] = useState('idle');

  const update = () => {
    setActiveChoice(gameRef.current.activeChoice);
    setRound(gameRef.current.round);
    setState(gameRef.current.state);
  }

  const gameRef = useRef(new Game(update));

  return(
    <PageTemplate slug="controlled-chaos" title="Controlled Chaos" className="cc">

      <Picture 
        imagePath="https://media.cryptid.quest/the-crypt/game-backgrounds/controlled-chaos/controlled-chaos-"
        imageWidths={IMAGE_WIDTHS_BACKGROUND}
        className = "cc__background" 
        imgClassName = "cc__background-img"
        loading="eager"
        fetchPriority="high"
      />

      <Block label="Controlled Chaos">
        <section className="cc__board">
          <div className="cc__ui">
            <button className="cc__ui-button start" disabled={state !== 'idle'} onClick={() => gameRef.current.start()}>{state === 'idle' ? "Start" : "CHAOS IN PROGRESS..."}</button>
            <button className="cc__ui-button reset" onClick={() => gameRef.current.reset()}>Reset</button>
            <div className="cc__ui-round">{round}</div>
          </div>
          <button onClick={() => gameRef.current.handlePlayerChoice('brutus')} className={activeChoice === 'brutus' ? 'button brutus active' : 'button brutus'}></button>
          <button onClick={() => gameRef.current.handlePlayerChoice('sparkplug')} className={activeChoice === 'sparkplug' ? 'button sparkplug active' : 'button sparkplug'}></button>
          <button onClick={() => gameRef.current.handlePlayerChoice('burnella')} className={activeChoice === 'burnella' ? 'button burnella active' : 'button burnella'}></button>
          <button onClick={() => gameRef.current.handlePlayerChoice('grumbit')} className={activeChoice === 'grumbit' ? 'button grumbit active' : 'button grumbit'}></button>
        </section>
      </Block>
      <PageFooter />
    </PageTemplate> 
  );
}
