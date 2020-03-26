class CreateUploads < ActiveRecord::Migration[5.0]
  def change
    create_table :uploads do |t|
      t.string :image
      t.text :title
      t.string :body

      t.timestamps
    end
  end
end
