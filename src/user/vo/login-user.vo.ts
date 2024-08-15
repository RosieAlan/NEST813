// interface 定义了数据结构， class 用于实现和操作这些数据。
interface UserInfo {
    id: number;
    username: string;

    nickName: string;

    email: string;

    headPic: string;

    phoneNumber: string;

    isFrozen: boolean;

    isAdmin: boolean;

    createTime: number;

    roles: string[];

    permissions: string[]
}
export class LoginUserVo {

    userInfo: UserInfo;

    accessToken: string;

    refreshToken: string;
}

