import { IMember } from '@/interfaces/member'

export default {
    getMember(id: string): IMember {
        const data: IMember = { uuid: 'employee_01', name: 'Rourou', };
        return <IMember>(data);
    },
    getMemberList(id: string): IMember[] {
        const data: IMember[] = [
            { uuid: 'employee_01', name: 'Rourou', },
            { uuid: 'employee_02', name: 'Ellen', },
        ];
        return <IMember[]>(data);
    },
}