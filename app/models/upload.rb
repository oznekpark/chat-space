class Upload < ApplicationRecord
	mount_uploader :image, ImagesUploader
end
