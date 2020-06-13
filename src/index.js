import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard/Dashboard';
import MenuBar from './components/MenuBar/MenuBar';
import * as serviceWorker from './serviceWorker';
import {IntlProvider} from "react-intl";

import locale_en from './translations/en.json';
import locale_es from './translations/es.json';

const data = {
  'en': locale_en,
  'es': locale_es,
};

const App = (props) => {

	const [language, setLanguage] = useState('en');

	return(
  	<IntlProvider locale={language} messages={data[language]}>
		<MenuBar setLanguage={setLanguage}/>
	    <Dashboard />
	</IntlProvider>
	);
}

ReactDOM.render(
  <React.StrictMode>
	  <App />  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
