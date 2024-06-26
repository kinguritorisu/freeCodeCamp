import { FlashMessages } from '../components/Flash/redux/flash-messages';

export const standardErrorMessage = {
  type: 'danger',
  message: FlashMessages.WentWrong
};

export const msTrophyError = {
  type: 'danger',
  message: FlashMessages.MsTrophyErr
};

export const reallyWeirdErrorMessage = {
  type: 'danger',
  message: FlashMessages.ReallyWeird
};

export const reportedErrorMessage = {
  type: 'danger',
  message: FlashMessages.NotRight
};

export const certificateMissingErrorMessage = {
  type: 'danger',
  message: FlashMessages.CertificateMissing
};

export const msTrophyVerified = {
  type: 'success',
  message: FlashMessages.MsTrophyVerified
};
