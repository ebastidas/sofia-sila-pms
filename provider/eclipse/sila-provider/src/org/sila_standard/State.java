/**
 * State.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.sila_standard;

public class State implements java.io.Serializable {
    private java.lang.String _value_;
    private static java.util.HashMap _table_ = new java.util.HashMap();

    // Constructor
    protected State(java.lang.String value) {
        _value_ = value;
        _table_.put(_value_,this);
    }

    public static final java.lang.String _inError = "inError";
    public static final java.lang.String _errorHandling = "errorHandling";
    public static final java.lang.String _idle = "idle";
    public static final java.lang.String _startup = "startup";
    public static final java.lang.String _standby = "standby";
    public static final java.lang.String _busy = "busy";
    public static final java.lang.String _paused = "paused";
    public static final java.lang.String _initializing = "initializing";
    public static final java.lang.String _resetting = "resetting";
    public static final State inError = new State(_inError);
    public static final State errorHandling = new State(_errorHandling);
    public static final State idle = new State(_idle);
    public static final State startup = new State(_startup);
    public static final State standby = new State(_standby);
    public static final State busy = new State(_busy);
    public static final State paused = new State(_paused);
    public static final State initializing = new State(_initializing);
    public static final State resetting = new State(_resetting);
    public java.lang.String getValue() { return _value_;}
    public static State fromValue(java.lang.String value)
          throws java.lang.IllegalArgumentException {
        State enumeration = (State)
            _table_.get(value);
        if (enumeration==null) throw new java.lang.IllegalArgumentException();
        return enumeration;
    }
    public static State fromString(java.lang.String value)
          throws java.lang.IllegalArgumentException {
        return fromValue(value);
    }
    public boolean equals(java.lang.Object obj) {return (obj == this);}
    public int hashCode() { return toString().hashCode();}
    public java.lang.String toString() { return _value_;}
    public java.lang.Object readResolve() throws java.io.ObjectStreamException { return fromValue(_value_);}
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new org.apache.axis.encoding.ser.EnumSerializer(
            _javaType, _xmlType);
    }
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new org.apache.axis.encoding.ser.EnumDeserializer(
            _javaType, _xmlType);
    }
    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(State.class);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://sila-standard.org", "State"));
    }
    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

}
