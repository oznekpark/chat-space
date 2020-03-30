require 'rails_helper'

RSpec.describe Message, type: :model do
	describe '#create' do
		context 'can save' do
			# imageがなくてもtextがあれば保存できる
			it "is valid with a text although without an image" do
				message = build(:message, image: nil)
				expect(message).to be_valid
			end
		
			# textがなくてもimageがあれば保存できる
			it "is valid with an image although without a text" do
				message = build(:message, text: nil)
				expect(message).to be_valid
			end

			# text,imageがあれば保存できる
			it "is valid with an image and a text" do
				message = build(:message)
				expect(message).to be_valid
			end
		end

		context 'can not save' do
			# imageとtextが空だと保存できない
			it "is invalid without an image and a text" do
				message = build(:message, text: nil, image: nil)
				message.valid?
				expect(message.errors[:text]).to include("を入力してください")
			end

			# group_idが無いと保存できない
			it 'is invalid without group_id' do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
			end
			
			# user_idが無いと保存できない
			it 'is invaid without user_id' do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end
		end
	end
end