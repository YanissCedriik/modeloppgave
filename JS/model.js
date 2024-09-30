//Model


const model =  {

    
    
    app: {
        loggedInUserID: null,
        pages: ["createUserPage", "logInPage", "userProfilePage", "mainPage", ],
        currentPage: "logInPage",        
        movieForumPages: [],
    },

    //---------------------------------------------------------------------------
    
    
    
    

    input: {
// input.profilePage.moodFilterInput[i] 
        profilePage: {
            moodFilterInput:
            {
                sad: false,
                happy: false,
                angry: false,
                lonely: false,
                romantic: false,
            },

        },


        



        //For loginPage
        login: {
            userName: null,
            password: null,
        },

        //For createUserPage
        createUser: {
            userName: null,
            password: null,
            repeatPassword: null,
            email: null,
            adress: null,
        },

        
        tempSearchbarInput: '',
        searchbarInput: '',
        
        tempUserBioInput: '',
        userBioInput: '',
        

        addMovieInputs:{
            title: "",
            genre: [""],
            rating: null,
            movieLength: "",
            releaseDate: "",
            whereToWatch: "",
            moviePoster: "",
            trailerLink : "",
            synopsis: "",

            mainActors: [""],
            director: "",
        },



        addToWatchListInput: null,
        
        addToFavorites: null,

        addToSeen: null,

        
    },
    
    //-----------------------------------------------------------------------------
    
    
    
    
    
    
    data: {
//---------------------------------------User Profiles and Data--------------------------------------------------------------------
        users:[
            {
            ID: 1001,
            userName: "Yaniss", 
            password: "piss123",
            email: "yaniss@pissmail.com",
            adress: "PissIGataVeien 32",
            
            userProfilePicture: ["Assets/account_circle_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg", ],
            userBio: "Jeg er ny her, hvem vil se på Deadpool med meg?",
            
            userGenreBasedOnMoodFilterPreferences: {
                sad: false,
                happy: false,
                angry: false,
                lonely: false,
                romantic: false,
            },

            userFavoriteMoviesList: [
                {
                    ID: [1001,],
                    userRating: null,

                },

                ],
            userWatchList: [
                {
                    ID: [2301,],
                    userRating: null,
    
                },
    
                ],
            userComments: [
                {
                    MovieId: "",
                    commentId: "",
                    username: "",
                    comment: "",
                },
    
                ],
            userRatings: [
                    {
                        movieId: "",
                        username: "",
                        rating: "",
                        
        
                    },
        
                    ],

            },
            {
            ID: 1002,
            userName: "Nicolai", 
            password: "Sneipen47",
            email: "charter_nico@get.no",
            adress: "Ikke oppgitt",
            
            userProfilePicture: ["Assets/granCanaria/bilderISpeilet/nr10", ],
            userBio: "",
            
            userGenreBasedOnMoodFilterPreferences: {
                sad: false,
                happy: false,
                angry: false,
                lonely: false,
                romantic: false,
            },

            userFavoriteMoviesList: [
                {
                    ID: [1001,],
                    userRating: null,

                },

                ],

            userWatchList: [
                {
                    ID: [2301,],
                    userRating: null,
    
                },
    
                ],
            userComments: [
                {
                    MovieId: "",
                    commentId: "",
                    username: "",
                    comment: "",
                },
    
                ],
            userRatings: [
                    {
                        movieId: "",
                       username: "",
                       rating: "",
                       
        
                    },
        
                    ],    

            },
            {
                ID: 1003,
                userName: "Henrik", 
                password: "",
                email: "",
                adress: "",
                
                userProfilePicture: ["Assets/account_circle_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg", ],
                userBio: "",
                
                userGenreBasedOnMoodFilterPreferences: {
                    sad: false,
                    happy: false,
                    angry: false,
                    lonely: false,
                    romantic: false,
                },
    
                userFavoriteMoviesList: [
                    {
                        ID: [1001,],
                        userRating: null,
    
                    },
    
                    ],
                userWatchList: [
                {
                    ID: [2301,],
                    userRating: null,
    
                },
    
                ],
                userComments: [
                    {
                       
        
                    },
        
                    ],
                userRatings: [
                    {
                        
        
                    },
        
                    ],    
    
                },
                
        ],

//--------------------------------------------------End of Users Object------------------------------------------------------------------------            

//----------------------------------------------------Movies Database--------------------------------------------------------------------------


        movies: [
        {
            ID:1001,
            title: null,
            genre: [null,],
            rating: null,
            avgRating: null,
            movieLength: null,
            releaseDate: null,
            whereToWatch: null,
            isPorn: false,
            isSeen: false,
            isRated: false,

            
            moviePoster: null,
            trailerLink : null,
            synopsis:null,

            mainActors: [null,],
            director: null,

                comments: [
                    {
                    ID:2354,
                    userName: null,
                    date: null,
                    comment: null,
                    },
                ],
        },

        ],

        
    
    },

    
    
   //------------------------------------------------------------------------------- 
    
    


};

