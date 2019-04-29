import * as Model from '@/models/interfaces/member'
import { MemberStatus } from '@/models/status/member'

export default {
    getMember(id: string): Model.IMemberResponse {
        const data: Model.IMemberResponse = { uuid: 'employee_01', name: 'Rourou', status: MemberStatus.E1 };
        return <Model.IMemberResponse>(data);
    },
    getMemberList(id: string): Model.IMemberResponse[] {
        const data: Model.IMemberResponse[] = [
            { uuid: 'employee_01', name: 'Rourou', status: MemberStatus.E1 },
            { uuid: 'employee_02', name: 'Ellen', status: MemberStatus.E2 },
        ];
        return <Model.IMemberResponse[]>(data);
    },
}