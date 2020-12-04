// Função de ir para SignInPage 

export const goToSignInPage = (history) => {
    history.push("/signin")
}

// Função de ir para LogInPage 

export const goToLogInPage = (history) => {
    history.push("/login")
}

// Função de ir para Home

export const goToHome= (history) => {
    history.push("/")
}

// Função de ir para Feed

export const goToFeed= (history) => {
    history.push("/feed")
}

// Função de ir para Post

export const goToPost= (history, id) => {
    history.push(`/post/${id}`)
}