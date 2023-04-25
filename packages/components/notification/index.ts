import { withInstallFunction } from "@viray/utils";
import Notify from './src/notify'

export const ViNotification = withInstallFunction(Notify, '$notify')
export default ViNotification