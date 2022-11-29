export const HasherHelper = {
    
    base64Encode(plain : any) {
        return Buffer.from(plain).toString("base64");
    },

    base64Decode(encoded : any) {
        return Buffer.from(encoded, "base64").toString("binary");
    }
}