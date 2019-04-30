import * as Model from '@/models/interfaces/member'
import { MemberStatus } from '@/models/status/member'
import Handler from '@/utilities/api-handler'

export default {
    getMember(id: string): Model.IMemberResponse {
        const data: Model.IMemberResponse = { uuid: 'employee_01', name: 'Rourou', status: MemberStatus.E1 };
        return <Model.IMemberResponse>(data);
    },
    async getMemberList(id: string): Promise<Model.IMemberResponse[]> {
        let config = {
            url: '',
            method: 'get'
        };
        let response = await Handler.request<string[]>(config);
        console.log(response);

        const data: Model.IMemberResponse[] = [
            { uuid: 'employee_01', name: 'Rourou', status: MemberStatus.E1 },
            { uuid: 'employee_02', name: 'Ellen', status: MemberStatus.E2 },
        ];
        return data;
    },
}