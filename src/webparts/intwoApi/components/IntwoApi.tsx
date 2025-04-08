import * as React from 'react';
import styles from './IntwoApi.module.scss';
import type { IIntwoApiProps } from './IIntwoApiProps';
import { escape } from '@microsoft/sp-lodash-subset';
import axios from 'axios';
//import { IHttpClientOptions, HttpClient, HttpClientResponse } from '@microsoft/sp-http';

// Define the IVacancy interface
// interface IVacancy {
//   id: string;
//   title: string;
//   location?: {
//     name: string;
//   };
//   department?: {
//     name: string;
//   };
// }

export default class IntwoApi extends React.Component<IIntwoApiProps> {

  constructor(props: IIntwoApiProps) {
    super(props);
  }
  public render(): React.ReactElement<IIntwoApiProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;
  
    return (
      <section className={`${styles.intwoApi} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
        </div>
        <div>
          <h3>Welcome to SharePoint Framework!</h3>
          <p>
            The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It&#39;s the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling.
          </p>
          <h4>Learn more about SPFx development:</h4>
          <ul className={styles.links}>
            <li><a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">SharePoint Framework Overview</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-graph" target="_blank" rel="noreferrer">Use Microsoft Graph in your solution</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-teams" target="_blank" rel="noreferrer">Build for Microsoft Teams using SharePoint Framework</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-viva" target="_blank" rel="noreferrer">Build for Microsoft Viva Connections using SharePoint Framework</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-store" target="_blank" rel="noreferrer">Publish SharePoint Framework applications to the marketplace</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-api" target="_blank" rel="noreferrer">SharePoint Framework API reference</a></li>
            <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
          </ul>
        </div>
      </section>
    );
  }
  public async componentDidMount(): Promise<void> {
    //await this.getVacancies();
    await this.getVacancyById();
    this.callLogicApp();
    // Example: Call a method from the web part to fetch data
    // Assuming `getVacancyById` is passed as a prop or accessible
    // Replace '12345' with the actual vacancy ID
    // this.props.getVacancyById('12345').then(data => console.log(data));
  }
  public callLogicApp(): void {
    const logicAppUrl = "https://prod-06.centralindia.logic.azure.com:443/workflows/97f76ad1d93840a3863af7e5fc61e5f6/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=SYxziFnv3E7-B3KC1-pQYIqBE6hRfyFWSkckVW7nKd4";
  
    const requestBody = {
      name: "John Doe",
      email: "john@example.com"
    };
  
    fetch(logicAppUrl, {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Logic App Response:", data);
      })
      .catch(error => {
        console.error("Error calling Logic App:", error);
      });
  }
  
  public async getVacancyById(): Promise<any> {
    //const url: string = "https://api.homerun.co/v2/vacancies?include[]=location&include[]=department";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    //const proxyUrl = "http://localhost:8080/";
    const targetUrl = "https://api.homerun.co/v2/vacancies?include[]=location&include[]=department";
    //proxyUrl +
    fetch(proxyUrl + targetUrl, {
      method: "GET",
      headers: {
        "Authorization": "Bearer 1012918|xjCx70R5YWfwZxOTxCKjN0FASoCycktRKfhFADm2ae6ac2b1",
        "Content-Type": "application/json",
        'origin': 'http://localhost:8080/' 
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error("Error:", err));
    

      try {
        const response = await axios.get(targetUrl, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer 1012918|xjCx70R5YWfwZxOTxCKjN0FASoCycktRKfhFADm2ae6ac2b1"
            }
        });

        this.context.res = {
            status: 200,
            body: response.data
        };
    } catch (error) {
        this.context.res = {
            status: error.response?.status || 500,
            body: {
                error: true,
                message: error.message
            }
        };
    }

   // const postURL = "https://REST-API-URL";  
  
  
  
  // const requestHeaders: Headers = new Headers();  
  // requestHeaders.append('Content-type', 'application/json');  
  // requestHeaders.append('Cache-Control', 'no-cache');  
  // //For an OAuth token  
  // requestHeaders.append('Authorization', 'Bearer 1012918|xjCx70R5YWfwZxOTxCKjN0FASoCycktRKfhFADm2ae6ac2b1');  
  
  // const httpClientOptions: IHttpClientOptions = {  
  //   headers: requestHeaders  
  // };  
  
  // console.log("About to make REST API request.");  
  
  // return this.props.httpClient.post(  
  //   targetUrl,  
  //   HttpClient.configurations.v1,  
  //   httpClientOptions)  
  //   .then((response: Response): Promise<HttpClientResponse> => {  
  //     console.log("REST API response received.");  
  //     return response.json();  
  //   });  
}  
    // const options: IHttpClientOptions = {
    //   headers: {
    //     'Authorization': `Bearer 1012918|xjCx70R5YWfwZxOTxCKjN0FASoCycktRKfhFADm2ae6ac2b1`,
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   },
    //   mode: 'cors'
    // };
    
  //  await this.props.httpClient.get(url, HttpClient.configurations.v1, options)
  //     .then((response: HttpClientResponse) => response.json())
  //     .then((data: any) => console.log(data))
  //     .catch((error: unknown) => console.error(error));
  // }
  
  // public async getVacancies(): Promise<IVacancy[] | null> {
  //   const url = `https://api.homerun.co/v2/vacancies?include[]=location&include[]=department`;


  //   const httpClientOptions: IHttpClientOptions = {
  //       headers: new Headers({
  //         'Authorization': 'Bearer 1012918|xjCx70R5YWfwZxOTxCKjN0FASoCycktRKfhFADm2ae6ac2b1',
  //         'Content-Type': 'application/json'
  //       }),
  //       method: "GET",
  //       mode: "no-cors"
  //   };
    
  //   this.props.httpClient
  //       .get(url, HttpClient.configurations.v1, httpClientOptions)
  //       .then((response: HttpClientResponse) => {
  //           console.log(response.json());
  //           return response.json();
  //       });  
  //   try {
  //     console.log("Authorization Token:", 'Bearer 1012918|xjCx70R5YWfwZxOTxCKjN0FASoCycktRKfhFADm2ae6ac2b1');
  //     const response = await fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer 1012918|xjCx70R5YWfwZxOTxCKjN0FASoCycktRKfhFADm2ae6ac2b1'
  //       },
  //       mode: 'no-cors'
  //     });
  
  //     if (!response.ok) {
  //       console.error(`Failed to fetch vacancies. Status: ${response.status}`);
  //       return null;
  //     }
  
  //     const data: IVacancy[] = await response.json();
  //     console.log("Vacancies:", data);
  //     return data;
  //   } catch (error) {
  //     console.error("Error fetching vacancies:", error);
  //     return null;
  //   }
  // }
}
