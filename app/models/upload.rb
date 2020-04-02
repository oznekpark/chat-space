class Upload < ApplicationRecord
	mount_uploader_uploader :image, ImagesUploader
end
