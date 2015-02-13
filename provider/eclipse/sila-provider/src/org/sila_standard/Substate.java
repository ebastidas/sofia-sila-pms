/**
 * Substate.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.sila_standard;

public class Substate implements java.io.Serializable {
    private java.lang.String _value_;
    private static java.util.HashMap _table_ = new java.util.HashMap();

    // Constructor
    protected Substate(java.lang.String value) {
        _value_ = value;
        _table_.put(_value_,this);
    }

    public static final java.lang.String _asynchPaused = "asynchPaused";
    public static final java.lang.String _pauseRequested = "pauseRequested";
    public static final java.lang.String _processing = "processing";
    public static final java.lang.String _responseWaiting = "responseWaiting";
    public static final java.lang.String _none = "none";
    public static final Substate asynchPaused = new Substate(_asynchPaused);
    public static final Substate pauseRequested = new Substate(_pauseRequested);
    public static final Substate processing = new Substate(_processing);
    public static final Substate responseWaiting = new Substate(_responseWaiting);
    public static final Substate none = new Substate(_none);
    public java.lang.String getValue() { return _value_;}
    public static Substate fromValue(java.lang.String value)
          throws java.lang.IllegalArgumentException {
        Substate enumeration = (Substate)
            _table_.get(value);
        if (enumeration==null) throw new java.lang.IllegalArgumentException();
        return enumeration;
    }
    public static Substate fromString(java.lang.String value)
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
        new org.apache.axis.description.TypeDesc(Substate.class);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://sila-standard.org", "Substate"));
    }
    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

}
