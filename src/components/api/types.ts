export interface ApiEndpointProps {
  method: string;
  path: string;
  description: string;
  request?: object;
  response: {
    status: number;
    body: object;
  };
}

export interface ApiEndpoint {
  method: string;
  path: string;
  description: string;
  request?: object;
  response: {
    status: number;
    body: object;
  };
}