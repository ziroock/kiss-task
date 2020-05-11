Rails.application.routes.draw do
    root 'pages#index'

    namespace :api do
        namespace :v1 do
            resources :people, param: :birthday
        end
    end

    # This will route requests that are not for pre-existing paths defined in
    # the API back to the index path
    # Allows me to use Switch and Route inside App.js
    #get '*path', to: 'pages#index', via: :all
    #get '*path' => redirect('/')

end
