class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :tag
      t.boolean :status
      t.string :slug

      t.timestamps
    end
  end
end
