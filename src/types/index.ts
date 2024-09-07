export interface SelectSingleOption {
  label: string;
  value: string;
}

export interface SelectOption {
  label: string;
  value: string;
  icon?: string;
  requireIntegration?: boolean;
  isConnected?: boolean;
}
