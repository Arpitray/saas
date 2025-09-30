export const MessageTypeEnum = Object.freeze({
  TRANSCRIPT: "transcript",
  FUNCTION_CALL: "function-call",
  FUNCTION_CALL_RESULT: "function-call-result",
  ADD_MESSAGE: "add-message",
});

export const MessageRoleEnum = Object.freeze({
  USER: "user",
  SYSTEM: "system",
  ASSISTANT: "assistant",
});

export const TranscriptMessageTypeEnum = Object.freeze({
  PARTIAL: "partial",
  FINAL: "final",
});

/**
 * @typedef {Object} BaseMessage
 * @property {string} type
 */

/**
 * @typedef {Object} TranscriptMessage
 * @property {"transcript"} type
 * @property {"user"|"system"|"assistant"} role
 * @property {"partial"|"final"} transcriptType
 * @property {string} transcript
 */

/**
 * @typedef {Object} FunctionCallMessage
 * @property {"function-call"} type
 * @property {{name: string, parameters: any}} functionCall
 */

/**
 * @typedef {Object} FunctionCallResultMessage
 * @property {"function-call-result"} type
 * @property {{forwardToClientEnabled?: boolean, result: any, [key: string]: any}} functionCallResult
 */

/**
 * @typedef {TranscriptMessage | FunctionCallMessage | FunctionCallResultMessage} Message
 */
