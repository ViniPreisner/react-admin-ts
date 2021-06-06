interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export const isAuthenticated = () => true

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'ijasiodasoid90-asidjklasjd90asudlkasjd9asdnk',
                user: {
                    name: 'Vinicius',
                    email: 'vinipreisner@gmail.com'
                }
            })
        }, 2000)
    })
}