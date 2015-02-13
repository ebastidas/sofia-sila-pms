/**
 * DeviceIdentification.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.sila_standard;

public class DeviceIdentification  implements java.io.Serializable {
    private java.lang.String wsdl;

    private java.lang.String siLAInterfaceVersion;

    private int siLADeviceClass;

    private java.lang.String siLADeviceClassVersion;

    private int[] siLASubDeviceClass;

    private java.lang.String deviceManufacturer;

    private java.lang.String deviceName;

    private java.lang.String deviceSerialNumber;

    private java.lang.String deviceFirmwareVersion;

    public DeviceIdentification() {
    }

    public DeviceIdentification(
           java.lang.String wsdl,
           java.lang.String siLAInterfaceVersion,
           int siLADeviceClass,
           java.lang.String siLADeviceClassVersion,
           int[] siLASubDeviceClass,
           java.lang.String deviceManufacturer,
           java.lang.String deviceName,
           java.lang.String deviceSerialNumber,
           java.lang.String deviceFirmwareVersion) {
           this.wsdl = wsdl;
           this.siLAInterfaceVersion = siLAInterfaceVersion;
           this.siLADeviceClass = siLADeviceClass;
           this.siLADeviceClassVersion = siLADeviceClassVersion;
           this.siLASubDeviceClass = siLASubDeviceClass;
           this.deviceManufacturer = deviceManufacturer;
           this.deviceName = deviceName;
           this.deviceSerialNumber = deviceSerialNumber;
           this.deviceFirmwareVersion = deviceFirmwareVersion;
    }


    /**
     * Gets the wsdl value for this DeviceIdentification.
     * 
     * @return wsdl
     */
    public java.lang.String getWsdl() {
        return wsdl;
    }


    /**
     * Sets the wsdl value for this DeviceIdentification.
     * 
     * @param wsdl
     */
    public void setWsdl(java.lang.String wsdl) {
        this.wsdl = wsdl;
    }


    /**
     * Gets the siLAInterfaceVersion value for this DeviceIdentification.
     * 
     * @return siLAInterfaceVersion
     */
    public java.lang.String getSiLAInterfaceVersion() {
        return siLAInterfaceVersion;
    }


    /**
     * Sets the siLAInterfaceVersion value for this DeviceIdentification.
     * 
     * @param siLAInterfaceVersion
     */
    public void setSiLAInterfaceVersion(java.lang.String siLAInterfaceVersion) {
        this.siLAInterfaceVersion = siLAInterfaceVersion;
    }


    /**
     * Gets the siLADeviceClass value for this DeviceIdentification.
     * 
     * @return siLADeviceClass
     */
    public int getSiLADeviceClass() {
        return siLADeviceClass;
    }


    /**
     * Sets the siLADeviceClass value for this DeviceIdentification.
     * 
     * @param siLADeviceClass
     */
    public void setSiLADeviceClass(int siLADeviceClass) {
        this.siLADeviceClass = siLADeviceClass;
    }


    /**
     * Gets the siLADeviceClassVersion value for this DeviceIdentification.
     * 
     * @return siLADeviceClassVersion
     */
    public java.lang.String getSiLADeviceClassVersion() {
        return siLADeviceClassVersion;
    }


    /**
     * Sets the siLADeviceClassVersion value for this DeviceIdentification.
     * 
     * @param siLADeviceClassVersion
     */
    public void setSiLADeviceClassVersion(java.lang.String siLADeviceClassVersion) {
        this.siLADeviceClassVersion = siLADeviceClassVersion;
    }


    /**
     * Gets the siLASubDeviceClass value for this DeviceIdentification.
     * 
     * @return siLASubDeviceClass
     */
    public int[] getSiLASubDeviceClass() {
        return siLASubDeviceClass;
    }


    /**
     * Sets the siLASubDeviceClass value for this DeviceIdentification.
     * 
     * @param siLASubDeviceClass
     */
    public void setSiLASubDeviceClass(int[] siLASubDeviceClass) {
        this.siLASubDeviceClass = siLASubDeviceClass;
    }

    public int getSiLASubDeviceClass(int i) {
        return this.siLASubDeviceClass[i];
    }

    public void setSiLASubDeviceClass(int i, int _value) {
        this.siLASubDeviceClass[i] = _value;
    }


    /**
     * Gets the deviceManufacturer value for this DeviceIdentification.
     * 
     * @return deviceManufacturer
     */
    public java.lang.String getDeviceManufacturer() {
        return deviceManufacturer;
    }


    /**
     * Sets the deviceManufacturer value for this DeviceIdentification.
     * 
     * @param deviceManufacturer
     */
    public void setDeviceManufacturer(java.lang.String deviceManufacturer) {
        this.deviceManufacturer = deviceManufacturer;
    }


    /**
     * Gets the deviceName value for this DeviceIdentification.
     * 
     * @return deviceName
     */
    public java.lang.String getDeviceName() {
        return deviceName;
    }


    /**
     * Sets the deviceName value for this DeviceIdentification.
     * 
     * @param deviceName
     */
    public void setDeviceName(java.lang.String deviceName) {
        this.deviceName = deviceName;
    }


    /**
     * Gets the deviceSerialNumber value for this DeviceIdentification.
     * 
     * @return deviceSerialNumber
     */
    public java.lang.String getDeviceSerialNumber() {
        return deviceSerialNumber;
    }


    /**
     * Sets the deviceSerialNumber value for this DeviceIdentification.
     * 
     * @param deviceSerialNumber
     */
    public void setDeviceSerialNumber(java.lang.String deviceSerialNumber) {
        this.deviceSerialNumber = deviceSerialNumber;
    }


    /**
     * Gets the deviceFirmwareVersion value for this DeviceIdentification.
     * 
     * @return deviceFirmwareVersion
     */
    public java.lang.String getDeviceFirmwareVersion() {
        return deviceFirmwareVersion;
    }


    /**
     * Sets the deviceFirmwareVersion value for this DeviceIdentification.
     * 
     * @param deviceFirmwareVersion
     */
    public void setDeviceFirmwareVersion(java.lang.String deviceFirmwareVersion) {
        this.deviceFirmwareVersion = deviceFirmwareVersion;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof DeviceIdentification)) return false;
        DeviceIdentification other = (DeviceIdentification) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.wsdl==null && other.getWsdl()==null) || 
             (this.wsdl!=null &&
              this.wsdl.equals(other.getWsdl()))) &&
            ((this.siLAInterfaceVersion==null && other.getSiLAInterfaceVersion()==null) || 
             (this.siLAInterfaceVersion!=null &&
              this.siLAInterfaceVersion.equals(other.getSiLAInterfaceVersion()))) &&
            this.siLADeviceClass == other.getSiLADeviceClass() &&
            ((this.siLADeviceClassVersion==null && other.getSiLADeviceClassVersion()==null) || 
             (this.siLADeviceClassVersion!=null &&
              this.siLADeviceClassVersion.equals(other.getSiLADeviceClassVersion()))) &&
            ((this.siLASubDeviceClass==null && other.getSiLASubDeviceClass()==null) || 
             (this.siLASubDeviceClass!=null &&
              java.util.Arrays.equals(this.siLASubDeviceClass, other.getSiLASubDeviceClass()))) &&
            ((this.deviceManufacturer==null && other.getDeviceManufacturer()==null) || 
             (this.deviceManufacturer!=null &&
              this.deviceManufacturer.equals(other.getDeviceManufacturer()))) &&
            ((this.deviceName==null && other.getDeviceName()==null) || 
             (this.deviceName!=null &&
              this.deviceName.equals(other.getDeviceName()))) &&
            ((this.deviceSerialNumber==null && other.getDeviceSerialNumber()==null) || 
             (this.deviceSerialNumber!=null &&
              this.deviceSerialNumber.equals(other.getDeviceSerialNumber()))) &&
            ((this.deviceFirmwareVersion==null && other.getDeviceFirmwareVersion()==null) || 
             (this.deviceFirmwareVersion!=null &&
              this.deviceFirmwareVersion.equals(other.getDeviceFirmwareVersion())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = 1;
        if (getWsdl() != null) {
            _hashCode += getWsdl().hashCode();
        }
        if (getSiLAInterfaceVersion() != null) {
            _hashCode += getSiLAInterfaceVersion().hashCode();
        }
        _hashCode += getSiLADeviceClass();
        if (getSiLADeviceClassVersion() != null) {
            _hashCode += getSiLADeviceClassVersion().hashCode();
        }
        if (getSiLASubDeviceClass() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getSiLASubDeviceClass());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getSiLASubDeviceClass(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        if (getDeviceManufacturer() != null) {
            _hashCode += getDeviceManufacturer().hashCode();
        }
        if (getDeviceName() != null) {
            _hashCode += getDeviceName().hashCode();
        }
        if (getDeviceSerialNumber() != null) {
            _hashCode += getDeviceSerialNumber().hashCode();
        }
        if (getDeviceFirmwareVersion() != null) {
            _hashCode += getDeviceFirmwareVersion().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(DeviceIdentification.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://sila-standard.org", "DeviceIdentification"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("wsdl");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Wsdl"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("siLAInterfaceVersion");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SiLAInterfaceVersion"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("siLADeviceClass");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SiLADeviceClass"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("siLADeviceClassVersion");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SiLADeviceClassVersion"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("siLASubDeviceClass");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SiLASubDeviceClass"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        elemField.setMaxOccursUnbounded(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("deviceManufacturer");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DeviceManufacturer"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("deviceName");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DeviceName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("deviceSerialNumber");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DeviceSerialNumber"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("deviceFirmwareVersion");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DeviceFirmwareVersion"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}
