import { MemberModel } from './member.model';

export interface MessageModel {
    text: string;
    date: string;
    member: MemberModel;
}
