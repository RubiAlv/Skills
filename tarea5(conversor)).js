/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');

const languageStrings = {
    en: {
        translation: {
            WELCOME_MESSAGE: 'Hello, welcome to the Rubi currency converter. How can I help you?',
            HELP_MESSAGE:'I can convert pesos, euros and dollars, try saying something like "convert 4 pesos to euros".  How can I help you?',
            GOODBYE_MESSAGE: 'Goodbye!',
            CONV_MESSAGE:'the conversion of ',
            EU_MESSAGE:' euros equals to ',
            P_MESSAGE:' pesos equals to ',
            D_MESSAGE:' dollars equals to ',
            DOLL_MESSAGE: ' in dollars',
            EUR_MESSAGE: ' in euros',
            PES_MESSAGE: ' in pesos',
            ELSE1_MESSAGE:'Enter only positive numbers, try saying "convert 5 euros to dollars"',
            ELSE2_MESSAGE:'Enter only positive numbers, try saying "convert 5 euros to pesos"',
            ELSE3_MESSAGE:'Enter only positive numbers, try saying "convert 5 pesos to euros"',
            ELSE4_MESSAGE:'Enter only positive numbers, try saying "convert 5 pesos to dollars"',
            ELSE5_MESSAGE:'Enter only positive numbers, try saying "convert 5 dollars to pesos"',
            ELSE6_MESSAGE:'Enter only positive numbers, try saying "convert 5 dollars to euros"'
            
        }
    },
    es:{
        translation: {
            WELCOME_MESSAGE: 'Hola, bienvenido al conversor de divisas de Rubí ¿En qué puedo ayudarte?',
            HELP_MESSAGE:'Puedo convertir pesos, euros y dólares, prueba diciendo algo como "convertir 4 pesos a euros". ¿En que puedo ayudarte?',
            GOODBYE_MESSAGE: 'Adiós',
            CONV_MESSAGE:'La conversión de ',
            EU_MESSAGE:' euros equivale a ',
            P_MESSAGE:' pesos equivale a ',
            D_MESSAGE:' dólares equivale a ',
            DOLL_MESSAGE: ' en dolares',
            EUR_MESSAGE: ' en euros',
            PES_MESSAGE: ' en pesos',
            ELSE1_MESSAGE:'Ingresa solo numeros positivos, prueba decir "convertir 5 euros a dólares"',
            ELSE2_MESSAGE:'Ingresa sólo números positivos, prueba decir "convertir 5 euros a pesos"',
            ELSE3_MESSAGE:'Ingresa sólo números positivos, prueba decir "convertir 5 pesos a euros"',
            ELSE4_MESSAGE:'Ingresa sólo números positivos, prueba decir "convertir 5 pesos a dólares"',
            ELSE5_MESSAGE:'Ingresa sólo números positivos, prueba decir "convertir 5 dolares a pesos"',
            ELSE6_MESSAGE:'Ingresa sólo números positivos, prueba decir "convertir 5 dolares a euros"'
            
        }
    }
};


const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const getRequestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = getRequestAttributes.t('WELCOME_MESSAGE');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const Convertir_euro_dolar_Handler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CustomEuroDolar' ;
    },
    handle (handlerInput) {
            const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
            const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
        if (cantidad >=1)
     {  const valor =1.12;
        const resultado =(cantidad * valor).toFixed(2);
        const m1 = requestAttributes.t('CONV_MESSAGE');
        const m2 = requestAttributes.t('EU_MESSAGE');
        const m3 = requestAttributes.t('DOLL_MESSAGE');
        const speakOutput = m1 + cantidad + m2 + resultado + m3;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    else
    {   
        const speakOutput = requestAttributes.t('ELSE1_MESSAGE');
        //const speakOutput = 'Ingresa sólo números positivos, prueba decir "convertir 5 euros a dolares"';
        
         return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
 }
};

const Convertir_euro_peso_Handler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CustomEuroPeso' ;
    },
    handle (handlerInput) {
            const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
            const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
        if (cantidad >=1)
     {  const valor =19.01;
        const resultado =(cantidad * valor).toFixed(2);
        const m1 = requestAttributes.t('CONV_MESSAGE')
        const m2 = requestAttributes.t('EU_MESSAGE')
        const m3 = requestAttributes.t('PES_MESSAGE');
        const speakOutput = m1 + cantidad + m2 + resultado + m3;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    else
    {
        const speakOutput = requestAttributes.t('ELSE2_MESSAGE');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
 }
};

const Convertir_peso_euro_Handler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CustomPesoEuro' ;
    },
    handle (handlerInput) {
            const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
            const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
        if (cantidad >=1)
     {  const valor =0.053;
        const resultado =(cantidad * valor).toFixed(2);
        const m1 = requestAttributes.t('CONV_MESSAGE')
        const m2 = requestAttributes.t('P_MESSAGE');
        const m3 = requestAttributes.t('EUR_MESSAGE');
        const speakOutput = m1 + cantidad + m2 + resultado + m3;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    else
    {
        const speakOutput = requestAttributes.t('ELSE3_MESSAGE');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
 }
};

const Convertir_peso_dolar_Handler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CustomPesoDolar' ;
    },
    handle (handlerInput) {
            const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
            const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
        if (cantidad >=1)
     {  const valor =0.057;
        const resultado =(cantidad * valor).toFixed(2);
        const m1 = requestAttributes.t('CONV_MESSAGE')
        const m2 = requestAttributes.t('P_MESSAGE');
        const m3 = requestAttributes.t('DOLL_MESSAGE');
        const speakOutput = m1 + cantidad + m2 + resultado + m3;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    else
    {
        const speakOutput = requestAttributes.t('ELSE4_MESSAGE');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
 }
};

const Convertir_dolar_peso_Handler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CustomDolarPeso' ;
    },
    handle (handlerInput) {
            const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
            const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        if (cantidad >=1)
     {  const valor =17.50;
        const resultado =(cantidad * valor).toFixed(2);
        const m1 = requestAttributes.t('CONV_MESSAGE');
        const m2 = requestAttributes.t('D_MESSAGE');
        const m3 = requestAttributes.t('PES_MESSAGE');
        const speakOutput = m1 + cantidad + m2 + resultado + m3;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    else
    {
        const speakOutput = requestAttributes.t('ELSE5_MESSAGE');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
 }
};

const Convertir_dolar_euro_Handler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CustomDolarEuro' ;
    },
    handle (handlerInput) {
            const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
            const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        if (cantidad >=1)
     {  const valor =0.92;
        const resultado =(cantidad * valor).toFixed(2);
        const m1 = requestAttributes.t('CONV_MESSAGE');
        const m2 = requestAttributes.t('D_MESSAGE');
        const m3 = requestAttributes.t('EUR_MESSAGE');
        const speakOutput = m1 + cantidad + m2 + resultado + m3;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    else
    {
        const speakOutput = requestAttributes.t('ELSE6_MESSAGE');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
 }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('HELP_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('GOODBYE_MESSAGE');
      
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const LoggingRequestInterceptor = {
    process(handlerInput) {
        console.log(`Incoming request: ${JSON.stringify(handlerInput.requestEnvelope.request)}`);
    }
};

// This response interceptor will log all outgoing responses of this lambda
const LoggingResponseInterceptor = {
    process(handlerInput, response) {
      console.log(`Outgoing response: ${JSON.stringify(response)}`);
    }
};

// This request interceptor will bind a translation function 't' to the requestAttributes.
const LocalizationInterceptor = {
  process(handlerInput) {
    const localizationClient = i18n.use(sprintf).init({
      lng: handlerInput.requestEnvelope.request.locale,
      fallbackLng: 'en',
      overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
      resources: languageStrings,
      returnObjects: true
    });

    const attributes = handlerInput.attributesManager.getRequestAttributes();
    attributes.t = function (...args) {
      return localizationClient.t(...args);
    }
  }
}




/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        Convertir_euro_dolar_Handler,
        Convertir_euro_peso_Handler,
        Convertir_peso_euro_Handler,
        Convertir_peso_dolar_Handler,
        Convertir_dolar_peso_Handler,
        Convertir_dolar_euro_Handler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .addRequestInterceptors(
        LocalizationInterceptor,
        LoggingRequestInterceptor)
    .addResponseInterceptors(
        LoggingResponseInterceptor)
    .lambda();