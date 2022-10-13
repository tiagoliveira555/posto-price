import { StationsData } from "../screens/Home";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Preload: undefined;
      Signin: undefined;
      Signup: undefined;
      Home: undefined;
      Details: { id: string };
    }
  }
}
