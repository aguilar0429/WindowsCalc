import { Redirect, Route } from 'react-router-dom';
import {
  IonApp, setupIonicReact, IonContent, IonHeader, IonPage,
  IonTitle, IonFooter, IonToolbar, IonModal, IonSplitPane, IonMenu, IonList,
  IonItem,IonIcon,IonLabel, IonRouterOutlet, IonButton
} from '@ionic/react';
import { setupConfig } from '@ionic/core';
import { IonReactRouter } from '@ionic/react-router';
import './App.css';
import { home, settings, person } from 'ionicons/icons';
import { personOutline } from 'ionicons/icons';
import { menuController } from '@ionic/core';
import { IonInput } from '@ionic/react';




/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


/* Theme variables */
import './theme/variables.css';

/* My components and imports*/
import ODisplay from './components/ODisplay';
import Pantalla from './components/Pantalla';
import Boton from './components/Boton';
import { useState } from 'react';
import Sidebar from './components/Sidebar';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faClockRotateLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faUser, faEnvelope);

setupIonicReact();

const App: React.FC = () => {
  interface CalculationRecord {
    expression: string;
    result: any;
  }
  const [inputValue, setInputValue] = useState('');
  const [operation, setOperation] = useState('');


  const [showSidebar, setShowSidebar] = useState(false);

  const [showHis, setShowHis] = useState(false);

  const handlleClick = () => {
    setShowSidebar(true);
    menuController.open('start');
  };
  
  const handllleClick = () => {
    setShowHis(true);
    menuController.open('start');
  };

  const [input, setInput] = useState('0');
  const [memory, setMemory] = useState<string[]>([]);
  const [showMem, setShowMem] = useState(false);
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState<CalculationRecord[]>([]);
  
 
  const handleClick = (val: string) => {
    
    
    
    switch (val) {

      case 'sqrt':
        setInput(Math.sqrt(parseFloat(input)).toString());
        setOperation(Math.sqrt(parseFloat(input)).toString());
        break;

      case 'pow':
        setInput(Math.pow(parseFloat(input), 2).toString());
        
        break;

      case 'inv':
        setInput((1 / parseFloat(input)).toString());
        break;

      case 'calc':
        try {
          setInput(eval(input));
          setOperation(`${inputValue} ${ input + '='}`);
          const result = eval(input);
          const expression = `${input} = ${result}`;
          console.log(result);
          console.log(expression);
          setHistory([...history, { expression, result }]);
          setValue(result);
        } catch (error) {
          setInput(eval(input));
          setOperation(`${inputValue} ${ input + '='}`);
        }
        break;

      case 'clr':
        setInput('0')
        setOperation(`${inputValue} ${''}`);
        break;

      case 'perc':
        setInput((parseFloat(input) / 100).toString());
        break;

      case 'del':
        setInput(input.slice(0, -1));
        break;

      case 'neg':
        setInput((parseFloat(input) * -1).toString());
        break;

      default:
        if (input === '0'){
          
          setInput(val);
          setOperation(`${inputValue} ${val}`);
        }else{
          setInput(input + val);
          setOperation(`${inputValue} ${input + val}`);
        }
        break;
    }
  };

  const handleMemClick = (val: string) => {
    
    switch (val) {
      case 'MC':
        setMemory([]);
        break;
      case 'MR':
        if(memory.length > 0) {
          setInput(memory[memory.length - 1]);
        }
        break;
      case 'M+':
        if(input !== '0') {
          const newMemory = [...memory];
          const currentValue = parseFloat(input);

          const firstValue = parseFloat(newMemory[0]);
          const sum = currentValue + firstValue;
          
          newMemory[0] = sum.toString();
          setMemory(newMemory);
        }
        break;
      case 'M-':
        if(input !== '0') {
          const newMemory = [...memory];
          const currentValue = parseFloat(input);
          const firstValue = parseFloat(newMemory[0]);
          const diff = currentValue - firstValue;
          newMemory[0] = diff.toString();
          setMemory(newMemory);
        }
        break;
      case 'MS':
        if(input !== '0') {
          const currentValue = input.toString();
          setMemory([...memory, currentValue]);
        }
        break;
      case 'ME':
        setShowSidebar(true);
        break;
      case 'His':
        setShowHis(true);
        break;

      case 'MemDisplay':
        setShowMem(true);
        break;
    }
  };

  return (
   
    <IonApp>
      <link rel="stylesheet" href="App.css"></link>
      <IonPage>
        <IonContent fullscreen>
          <div className='App'>
            <div className='calculadora'>
             
            
            <div className = 'ButtonDisplay'>
              <div className = 'item1'>
                
                  <button onClick={() => handlleClick()}><FontAwesomeIcon icon={faBars} /></button>
                
              </div>
              <div className = 'item1'>
                <div className = 'item3'>
                <button onClick={() => handllleClick()}><FontAwesomeIcon icon={faClockRotateLeft} /></button>
                </div>

                
                  
                
              </div>
            </div>
            <ODisplay operation={operation} />
            
              <Pantalla input={input} />
              
              <div className='fila memory'>
                
                <Boton onClick={() => handleMemClick('MC')}>MC</Boton>
                <Boton onClick={() => handleMemClick('MR')}>MR</Boton>
                <Boton onClick={() => handleMemClick('M+')}>M+</Boton>
                <Boton onClick={() => handleMemClick('M-')}>M-</Boton>
                <Boton onClick={() => handleMemClick('MS')}>MS</Boton>
                <Boton onClick={() => handleMemClick('MemDisplay')}>M⌄</Boton>
                
              </div>
              <div className='fila'>
                <Boton onClick={() => handleClick('perc')}>%</Boton>
                <Boton onClick={() => handleClick('clr')}>CE</Boton>
                <Boton onClick={() => handleClick('clr')}>C</Boton>
                <Boton onClick={() => handleClick('del')}>⌫</Boton>
              </div>
              <div className='fila'>
                <Boton onClick={() => handleClick('inv')}>1/x</Boton>
                <Boton onClick={() => handleClick('power')}>x<sup>2</sup></Boton>
                <Boton onClick={() => handleClick('sqrt')}>√</Boton>
                <Boton onClick={() => handleClick('/')}>÷</Boton>
              </div>
              <div className='fila'>
                <Boton onClick={() => handleClick('7')}>7</Boton>
                <Boton onClick={() => handleClick('8')}>8</Boton>
                <Boton onClick={() => handleClick('9')}>9</Boton>
                <Boton onClick={() => handleClick('*')}>×</Boton>
              </div>
              <div className='fila'>
                <Boton onClick={() => handleClick('4')}>4</Boton>
                <Boton onClick={() => handleClick('5')}>5</Boton>
                <Boton onClick={() => handleClick('6')}>6</Boton>
                <Boton onClick={() => handleClick('-')}>−</Boton>
              </div>
              <div className='fila'>
                <Boton onClick={() => handleClick('1')}>1</Boton>
                <Boton onClick={() => handleClick('2')}>2</Boton>
                <Boton onClick={() => handleClick('3')}>3</Boton>
                <Boton onClick={() => handleClick('+')}>+</Boton>
              </div>
              <div className='fila'>
                <Boton onClick={() => handleClick('neg')}>±</Boton>
                <Boton onClick={() => handleClick('0')}>0</Boton>
                <Boton onClick={() => handleClick('.')}>.</Boton>
                <Boton onClick={() => handleClick('calc')}>=</Boton>
              </div>
            </div>
          </div>
          <IonModal isOpen={showMem} onDidDismiss={() => setShowMem(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Memoria</IonTitle>
            </IonToolbar>
          </IonHeader>
          
          <IonContent>
            {memory.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </IonContent>
          
        </IonModal>

        <IonModal isOpen={showHis} onDidDismiss={() => setShowHis(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Historial</IonTitle>
            </IonToolbar>
          </IonHeader>
          
          <IonContent>
            <ul>
              {history.map((record, index) => (
                <li key={index}>{record.expression}</li>
              ))}
            </ul>
          </IonContent>
          
        </IonModal>

        <IonModal isOpen={showSidebar} onDidDismiss={() => setShowSidebar(false)} >
            <IonHeader>
              <IonToolbar>
                <IonTitle className="custom-font">WINDOWS 10 CALCULATOR</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <h3 className="custom-font">27 de marzo, 2023</h3>
              

                <p className="custom-font">Proyecto de la clase de Experiencia de Usuario.<br></br>
                En esta clase aprendemos sobre el conjunto de factores<br></br>
                y elementos relacionados con el proceso de interacción<br></br>
                de un usuario respecto a un producto o servicio.
                </p>
                <h1 className="custom-font" style = {{ fontSize: '24px' }}><strong>Autores</strong></h1>
                
                <h4 className="custom-font">Pedro Mendoza<br></br>Estudiante Ingenieria en Sistemas <br></br>20 años</h4>
                <h4 className="custom-font">Eduardo Aguilar<br></br>Estudiante Ingenieria en Sistemas <br></br>20 años</h4>
                
              </IonList>
            </IonContent>

          </IonModal>
        </IonContent>
      </IonPage>
    </IonApp>
   
  );
};


export default App;