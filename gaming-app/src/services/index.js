const apiURL = "https://game-catalog-django.herokuapp.com/"

export const login = async (user) => {
    const resp = await fetch(apiURL+'auth/users/login/',
    {
        method: 'POST',
        headers: {
            "Content-Type": 'Application/JSON'                
        },
        body: JSON.stringify(user)  
    }
).then(response => response.json())
return resp
    
}