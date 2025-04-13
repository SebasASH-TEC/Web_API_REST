namespace Web_API_REST.DataStructures
{
    // Nodo en una lista enlazada, que contiene un valor y una referencia al siguiente nodo.
    public class LinkedListNode
    {
        public Guid Id { get; set; }
        public string Value { get; set; }
        public LinkedListNode? Next { get; set; }

        public LinkedListNode(string value)
        {
            Id = Guid.NewGuid();
            Value = value;
        }
    }

}
