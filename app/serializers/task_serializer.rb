class TaskSerializer
  include JSONAPI::Serializer
  attributes :name, :tag, :status, :slug
end
