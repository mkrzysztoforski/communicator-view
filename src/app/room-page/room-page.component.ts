import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../services/ConnectionService';
import { MessageModel } from '../services/message.model';
import { AlgorithmsService } from '../services/AlgorithmsService';
import { MemberModel } from '../services/member.model';
import { COLOR_MODE } from '../services/colorMode';

@Component({
    selector: 'app-chat-page',
    templateUrl: './room-page.component.html',
    styleUrls: ['./room-page.component.scss']
})
export class RoomPageComponent implements OnInit {
    public colorMode = COLOR_MODE;
    public roomKey: string = '';
    public member: MemberModel;
    public messages: MessageModel[] = [];
    @ViewChild('chat') chat: ElementRef = null;

    constructor(private activatedRoute: ActivatedRoute,
                private connectionService: ConnectionService, private algorithms: AlgorithmsService) {
        this.roomKey = this.activatedRoute.snapshot.paramMap.get('roomKey');
    }

    ngOnInit(): void {
        setInterval(() => {
            if (this.member) {
                this.getMessages();
                this.getMembers();
            }
        }, 1000);
    }

    createMember(nick: string) {
        this.connectionService.createMember(this.roomKey, nick).subscribe((d: MemberModel) => {
            this.member = d;
        });
    }

    logMember(nickHashId: string) {
        this.connectionService.logMember(this.roomKey, nickHashId).subscribe((d: MemberModel) => {
            console.log(d);
            this.member = d;
        });
    }

    sendMessage(message: string) {
        if (message.length > 0) {
            this.connectionService.sendMessage(this.roomKey, this.member.hashId, message).subscribe(d => {
                console.log(d); // todo zamienic
            });
        }
    }

    getMessages() {
        this.connectionService.getMessages(this.roomKey, this.member.hashId).subscribe((d: MessageModel[]) => {
            const a = this.algorithms.diffrence(this.messages, d);
            for (const item of a) {
                this.messages.push({
                    text: item.text,
                    date: item.date,
                    member: (this.member.nick === item.member) ? this.member : {nick: item.member, hashId: ';)'}
                });
                this.scrollToDownChat();
            }
        });
    }

    getMembers() {
        this.connectionService.getMembers(this.roomKey, this.member.hashId).subscribe((d) => {
            // console.log(d); // todo members
        });
    }

    chatMsgFloat(member) {
        return member.hashId.length > 5 ? '--right' : '--left';
    }

    scrollToDownChat() {
        if (this.chat) {
            setTimeout(() => {
                this.chat.nativeElement.scrollTop = this.chat.nativeElement.scrollHeight;
            }, 50);
        }
    }

    alertMsg(msg: string) {
        alert(msg);
    }
}
