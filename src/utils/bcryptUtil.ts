import bcrypt from 'bcrypt';

export class BCryptUtil {

    private static saltOrRounds: number = 9;

    public static encrypt(password: string): Promise<string> {
        const passEncrypt: Promise<string> = bcrypt.hash(password, this.saltOrRounds);

        return passEncrypt;
    }

    public static compare(text: string, passEncrypt: string) {


        const b: Promise<boolean> = bcrypt.compare(text, passEncrypt);

        return b;
    }
}