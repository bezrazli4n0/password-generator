export interface FormState {
  useUpperCase: boolean;
  useLowerCase: boolean;
  useNumeric: boolean;
  useSymbols: boolean;
  charactersLength: number;
}

export enum FormActionKind {
  SetMask,
  SetCharactersLen,
}

export interface FormAction {
  type: FormActionKind;
  payload: string;
}

export const INITIAL_FORM_STATE: FormState = {
  useUpperCase: true,
  useLowerCase: false,
  useNumeric: false,
  useSymbols: false,
  charactersLength: 15,
};

export function formReducer(state: FormState, action: FormAction): FormState {
  const { type, payload } = action;

  switch (type) {
    case FormActionKind.SetMask:
      type FormStateKey = keyof typeof state;

      return {
        ...state,
        [payload]: !state[payload as FormStateKey],
      };
    case FormActionKind.SetCharactersLen:
      return {
        ...state,
        charactersLength: parseInt(payload),
      };
    default:
      return state;
  }
}
