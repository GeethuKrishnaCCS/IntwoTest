import * as React from 'react';
import type { IIntwoApiProps } from './IIntwoApiProps';
export default class IntwoApi extends React.Component<IIntwoApiProps> {
    constructor(props: IIntwoApiProps);
    render(): React.ReactElement<IIntwoApiProps>;
    componentDidMount(): Promise<void>;
    callLogicApp(): void;
    getVacancyById(): Promise<any>;
}
//# sourceMappingURL=IntwoApi.d.ts.map