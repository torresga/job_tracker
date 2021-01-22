class Api::CompaniesController < ApplicationController
  def index
    companies = Company.all

    render json: companies
  end

  def create
    company = Company.create!(company_params)
    if company
      render json: company
    else
      render json: company.errors
    end

  end

  def show
    company = Company.find(params[:id])

    render json: company
  end

  def destroy
  end

  private

  def company_params
    params.permit(:name, :industry, :product, :comments, :company_type)
  end
end
