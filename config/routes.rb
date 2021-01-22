Rails.application.routes.draw do
  namespace :api do
    resources :companies, only: [:index, :create, :show, :destroy]
  end

  root 'homepage#index'
end
