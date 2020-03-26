class Upload < ApplicationRecord
	mount_uploader_uploader :image, ImagesUplaoder
end
