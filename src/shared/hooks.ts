import useSWR from 'swr';
import apiHandler from './api';

interface IDashboard {
  user: IChamsUser;
  transactions: ITransaction[];
}

export interface IChamsUser {
  id: number;
  phone_number: string;
  created_at: string; // ISO date string
  mifos_client_id: number;
  mifos_office_id: number;
  mifos_savings_id: number;
  mifos_resource_id: number;
  gender: 'male' | 'female'; // or string if there are more options
  first_name: string;
  last_name: string;
  date_of_birth: string; // ISO date string
  address: string | null;
  place_of_birth: string | null;
  photo_url: string;
  state_id: number;
  middle_name: string;
  tier: number;
  email: string;
  registration_token: string | null;
  device_type: string | null;
  state_of_residence: string | null;
  merchant_id: number;
  account_type: string;
  show_balance: number;
  send_mail: number;
  send_sms: number;
  is_sms_cost_taken: number;
  unpaid_sms_count: number;
  last_sms_debit_date: string | null;
  icad_profiled: number;
  wallet_reference: string;
  wallet_name: string;
  business_id: number;
  wallets: IWallet[];
  bvn: string;
  clientClassification: ClientClassification;
}

export interface IWallet {
  id: number;
  account_no: string;
  status_enum: number;
  sub_status_enum: number;
  account_status: string;
  balance: string;
  name: string;
}

interface ClientClassification {
  active: boolean;
  mandatory: boolean;
}

export interface ITransaction {
  txRef: string;
  transferAmount: string;
  receiverWalletNumber: string;
  beneficiary_account_number: string;
  beneficiary_account_name: string;
  senderWalletNumber: string;
  userWalletId: string;
  createdAt: string;
}

export const useDashboardData = (user: string) => {
  const { data, error } = useSWR(`/account?user=${user}`, (url) =>
    sessionStorage.getItem('token')
      ? apiHandler(url, '', sessionStorage.getItem('token') ?? '')
      : { data: [], error: null }
  );

  return {
    data: data as IDashboard,
    isLoading: !data && !error,
    error,
  };
};
