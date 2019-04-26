import * as model from '@/interfaces/member'

export default {
    getMember(id: string): model.IMemberResponse {
        const data: model.IMemberResponse = { uuid: 'employee_01', name: 'Rourou', };
        return <model.IMemberResponse>(data);
    },
    getMemberList(id: string): model.IMemberResponse[] {
        const data: model.IMemberResponse[] = [
            { uuid: 'employee_01', name: 'Rourou', },
            { uuid: 'employee_02', name: 'Ellen', },
        ];
        return <model.IMemberResponse[]>(data);
    },
}