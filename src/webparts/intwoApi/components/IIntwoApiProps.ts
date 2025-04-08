import { HttpClient } from '@microsoft/sp-http';

export interface IIntwoApiProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  httpClient: HttpClient; // Add this property
}