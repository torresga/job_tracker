class Api::CompaniesController < ApplicationController
  def index
    companies = Company.all

    render json: companies
  end

  def create
  end

  def show
    company = Company.find(params[:id])

    render json: company
  end

  def destroy
  end

end
