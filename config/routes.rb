Rails.application.routes.draw do
  namespace :api do
    resources :companies, only: [:index, :create, :show, :edit, :update, :destroy]
  end

  root 'homepage#index'
end
