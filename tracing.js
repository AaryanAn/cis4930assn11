const { Resource } = require('@opentelemetry/resources');
const { ATTR_SERVICE_NAME } = require('@opentelemetry/semantic-conventions');
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { ConsoleSpanExporter } = require('@opentelemetry/sdk-trace-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-otlp-http');

// Instrumentations
const { ExpressInstrumentation } = require("opentelemetry-instrumentation-express");
const { MongoDBInstrumentation } = require("@opentelemetry/instrumentation-mongodb");
const { HttpInstrumentation } = require("@opentelemetry/instrumentation-http");

// Use OTLP exporter for Jaeger, fallback to console for debugging
// Set USE_JAEGER=true environment variable to use Jaeger
const useJaeger = process.env.USE_JAEGER === 'true' || process.env.USE_JAEGER === '1';

const traceExporter = useJaeger 
    ? new OTLPTraceExporter({
        url: 'http://localhost:4318/v1/traces', // OTLP HTTP endpoint for Jaeger
      })
    : new ConsoleSpanExporter();

const sdk = new NodeSDK({
    resource: new Resource({
        [ATTR_SERVICE_NAME]: "todo-service"
    }),
    traceExporter: traceExporter,
    instrumentations: [
        getNodeAutoInstrumentations(),
        new ExpressInstrumentation(),
        new MongoDBInstrumentation(),
        new HttpInstrumentation()
    ],
});

sdk.start();

if (useJaeger) {
    console.log('Tracing configured to export to Jaeger at http://localhost:16686');
} else {
    console.log('Tracing configured to export to console. Set USE_JAEGER=true to use Jaeger.');
}

