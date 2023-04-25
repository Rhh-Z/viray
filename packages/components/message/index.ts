import { withInstallFunction } from '@viray/utils';
import Message from './src/method';

export const ViMessage = withInstallFunction(Message, '$message')
export default ViMessage

export * from './src/message'
