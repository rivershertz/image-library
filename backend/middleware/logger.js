import {transports as _transports, format as _format} from 'winston';
import {logger, errorLogger as _errorLogger} from 'express-winston';

export const requestLogger = logger({
  transports: [
    new _transports.File({
      filename: 'logs/request.log',
    }),
  ],
  format: _format.json(),
});

export const errorLogger = _errorLogger({
  transports: [
    new _transports.File({
      filename: 'logs/error.log',
    }),
  ],
  format: _format.json(),
});
