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
            WELCOME_MESSAGE: 'Welcome to basic calculator!! ',
            HELP_MESSAGE:'You can perform basic operations such as addition, subtraction, multiplication and division. Try saying something like: "Add 4 plus 3"',
            GOODBYE_MESSAGE: 'Goodbye!',
            R_MESSAGE: 'The result of your operation is: ',
            ELSE_MESSAGE: 'The operation failed, please try again',
            ELSE_MULT_MESSAGE:'Enter another multiplication, remember that any number multiplied by zero will always give zero',
            ELSE_DIV_MESSAGE:'Division is not possible, please enter a number other than zero'
            
        }
    },
    es:{
        translation: {
            WELCOME_MESSAGE: 'Bienvenido a calculadora básica!! ',
            HELP_MESSAGE:'puedes realizar operaciones básicas como sumas, restas, multiplicaciones y divisiones. Intenta diciendo algo como: "Suma 4 mas 3"',
            GOODBYE_MESSAGE: 'Adiós',
            R_MESSAGE: 'El resultado de tu operación es: ',
            ELSE_MESSAGE: 'No se ha logrado realizar la operación, intentalo de nuevo',
            ELSE_MULT_MESSAGE: 'Ingresa otra multiplicación, recuerda que todo numero multiplicado por cero siempre dara cero',
            ELSE_DIV_MESSAGE:'No es posible realizar la división, ingresa otro número diferente a cero'

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

const suma_Handler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SumaIntent' ;
    },
    handle(handlerInput) {
            const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
            const a= handlerInput.requestEnvelope.request.intent.slots.valA.value;
            const b= handlerInput.requestEnvelope.request.intent.slots.valB.value;
        if (a!==b || a===b)
     {  const resultado =(parseFloat(a) + parseFloat(b));
        const m = requestAttributes.t('R_MESSAGE')
        const speakOutput = m + resultado;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    else
    {
        const speakOutput = requestAttributes.t('ELSE_MESSAGE');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
 }
};

const resta_Handler = {
    canHandle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RestaIntent' ;
    },
    handle(handlerInput) {
            const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
            const a= handlerInput.requestEnvelope.request.intent.slots.valA.value;
            const b= handlerInput.requestEnvelope.request.intent.slots.valB.value;
        if (a!==b || a===b)
     {  const resultado =(parseFloat(a) - parseFloat(b));
        const m = requestAttributes.t('R_MESSAGE')
        const speakOutput = m + resultado;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    else
    {
        const speakOutput = requestAttributes.t('ELSE_MESSAGE');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
 }
};

const mult_Handler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultIntent' ;
    },
    handle(handlerInput) {
            const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
            const a= handlerInput.requestEnvelope.request.intent.slots.valA.value;
            const b= handlerInput.requestEnvelope.request.intent.slots.valB.value;
        if ((a<0 || a>0) & (b<0 || b>0))
     {  const resultado =(parseFloat(a) * parseFloat(b));
        const m = requestAttributes.t('R_MESSAGE')
        const speakOutput = m + resultado;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    else
    {
        const speakOutput = requestAttributes.t('ELSE_MULT_MESSAGE');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
 }
};

const div_Handler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DivIntent' ;
    },
    handle(handlerInput) {
            const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
            const a= handlerInput.requestEnvelope.request.intent.slots.valA.value;
            const b= handlerInput.requestEnvelope.request.intent.slots.valB.value;
        if ((a<0 || a>0) & (b<0 || b>0))
     {  const resultado =(parseFloat(a) / parseFloat(b));
        const m = requestAttributes.t('R_MESSAGE')
        const speakOutput = m + resultado;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    else
    {
        const speakOutput = requestAttributes.t('ELSE_DIV_MESSAGE');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
 }
};



const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('HELP_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('GOODBYE_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
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
        suma_Handler,
        resta_Handler,
        mult_Handler,
        div_Handler,
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