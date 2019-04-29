import * as Model from '@/models/interfaces/member'

export default {
    getMember(id: string): Model.IMemberResponse {
        const data: Model.IMemberResponse = { uuid: 'employee_01', name: 'Rourou', };
        return <Model.IMemberResponse>(data);
    },
    getMemberList(id: string): Model.IMemberResponse[] {
        const data: Model.IMemberResponse[] = [
            { uuid: 'employee_01', name: 'Rourou', },
            { uuid: 'employee_02', name: 'Ellen', },
        ];
        return <Model.IMemberResponse[]>(data);
    },
}