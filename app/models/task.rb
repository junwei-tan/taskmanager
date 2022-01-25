class Task < ApplicationRecord
    before_create :slugify

    def slugify
        self.slug = name.parameterize
    end
end
